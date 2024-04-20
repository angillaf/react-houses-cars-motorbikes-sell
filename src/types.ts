export type HouseProps = {
  src: string;
  id: number;
  price: number;
  location: string;
  sold: boolean;
};

export type DarkModeProps = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

export type UseCloseMenuProps = {
  dropDownList: boolean;
};

export type House = HouseProps & DarkModeProps;

export type ModalProps = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};
