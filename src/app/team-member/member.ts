interface Member {
  name: string;
  position?: string;
  picUrl?: string;
  desc?: string;
  icons?: Icon[];
}

interface Icon {
  name: string;
  link: string;
}
