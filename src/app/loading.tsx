import loadingSvg from "@/assets/icons/spinner.svg";
import Image from 'next/image';

const loading = () => {
  return (
    <div className="flex items-center flex-col mt-16">
        <h2 className="text-6xl text-amber-500">Loading...</h2>
        <Image src={loadingSvg} alt="" />
    </div>
  )
}

export default loading