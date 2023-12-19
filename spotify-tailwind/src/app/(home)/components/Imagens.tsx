import Image, { ImageProps } from "next/image";

const Imagens = ({ src, alt}: ImageProps) => {
  return <Image src={src} alt={alt} height={0} width={0} sizes="100vw"/>;
};

export default Imagens;