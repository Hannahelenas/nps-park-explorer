import { useState } from "react";
import type { VisitorCenter } from "../../types/VisitorCenter";
import OpenToday from "../OpenToday";

interface VisitorCenterCardProps {
  vc: VisitorCenter;
}

const VisitorCenterCard = ({ vc }: VisitorCenterCardProps) => {
  const imageUrl = vc.images?.[0]?.url?.trim();
  const [imgFailed, setImgFailed] = useState(false);
  return (
    <li className="py-6 border-t">
      <article className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
        {/* Text container */}
        <div
          className={`col-span-1 sm:col-span-2 ${
            !imageUrl || imgFailed ? "lg:col-span-6" : "lg:col-span-4"
          }`}
        >
          <h3 className="text-2xl mb-2 font-black tracking-tighter">
            {vc.name}
          </h3>
          <p className="text-md font-serif leading-relaxed mb-2">
            {vc.description}
          </p>
          <OpenToday operatingHours={vc.operatingHours} />
        </div>

        {/* Image container */}
        <div
          className="col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col 
        gap-2"
        >
          {imageUrl && !imgFailed ? (
            <img
              src={imageUrl}
              alt={vc.images[0].altText || vc.name}
              className="aspect-[3/2] rounded-xl object-cover w-full"
              loading="lazy"
              onError={() => setImgFailed(true)}
            />
          ) : null}
        </div>
      </article>
    </li>
  );
};

export default VisitorCenterCard;
