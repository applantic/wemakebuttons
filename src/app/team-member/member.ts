interface Member {
  name: string;
  position?: string;
  picUrl?: string;
  hoverPicUrl?: string;
  desc?: string;
  icons?: Icon[];
}

interface Icon {
  name: string;
  link: string;
}
