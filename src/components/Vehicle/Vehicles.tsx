import { useRef, useState } from "react";
import { VehiclesProps } from "../../types";
import Dialog from "../Dialog";
import { toast } from "react-toastify";
import { twMerge as tm } from "tailwind-merge";
import Vehicle from "./Vehicle";
const Vehicles = ({
  dark,
  priceSearch,
  searchParameter,
  vehicleData,
}: VehiclesProps) => {
  const vehicleSelected: string = "car"; // don't forget to add motorbikes
  const [tempPrice, setTempPrice] = useState<number>(0);
  const [openModal, setOpenModal] = useState(false);
  const [yesButtonDialog, setYesButtonDialog] = useState(false);

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const toggleModal = (price: number) => {
    if (openModal) {
      setOpenModal(false);
      dialogRef.current?.close();

      toast.success(
        <div>
          <p>
            {vehicleSelected} successfully sold ! <br /> {price} $ have been
            taken from your account.
          </p>
        </div>,
      );
    } else {
      setTempPrice(price);
      setOpenModal(true);
      dialogRef.current?.showModal();
    }
  };
  const vehicles = vehicleData.map(({ src, id, price, sold, name }) => (
    <Vehicle
      src={src}
      id={id}
      key={id}
      dark={dark}
      price={price}
      sold={sold}
      name={name}
      toggleModal={toggleModal}
      setYesButtonDialog={setYesButtonDialog}
      yesButtonDialog={yesButtonDialog}
    />
  ));
  const filteredPerPriceVehicles = vehicleData
    .filter(({ price }) => priceSearch === price)
    .map(({ src, id, price, sold, name }) => (
      <Vehicle
        src={src}
        id={id}
        key={id}
        dark={dark}
        price={price}
        sold={sold}
        name={name}
        toggleModal={toggleModal}
        setYesButtonDialog={setYesButtonDialog}
        yesButtonDialog={yesButtonDialog}
      />
    ));

  return (
    <>
      {searchParameter === "none" ? (
        vehicles
      ) : priceSearch === 0 ? (
        vehicles
      ) : filteredPerPriceVehicles.length === 0 ? (
        <p
          className={tm(
            "flex h-72 items-center justify-center text-center text-3xl",
            dark && "text-white",
          )}
        >
          {`No ${vehicleSelected}s found at ${priceSearch} $`}
        </p>
      ) : (
        <>
          <p className={tm("text-2xl", dark && "text-neutral-400")}>
            <b className={tm("", dark && "text-white")}>
              {filteredPerPriceVehicles.length}
            </b>{" "}
            {filteredPerPriceVehicles.length === 1
              ? `${vehicleSelected} found at ${priceSearch}$`
              : `${vehicleSelected}s found at ${priceSearch}$`}
          </p>
          <div className="flex w-full flex-wrap items-center justify-center gap-10 pl-10 pr-10">
            {filteredPerPriceVehicles}
          </div>
        </>
      )}
      <Dialog
        openModal={openModal}
        setOpenModal={setOpenModal}
        toggleModal={toggleModal}
        dialogRef={dialogRef}
        tempPrice={tempPrice}
        dark={dark}
        yesButtonDialog={yesButtonDialog}
        setYesButtonDialog={setYesButtonDialog}
      />
    </>
  );
};
export default Vehicles;
