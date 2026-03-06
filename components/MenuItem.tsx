import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWheatAwn, faCarrot, faSeedling, faSlash } from "@fortawesome/free-solid-svg-icons";

export enum Tag {
  gf = "GLUTEN FREE",
  v = "VEGETARIAN",
  vegan = "VEAGAN"
}

export const symbols = {
  "GLUTEN FREE": <div className="relative">
    <FontAwesomeIcon icon={faWheatAwn} />
    <FontAwesomeIcon icon={faSlash} className="absolute inset-0 top-[-1px] left-[-1px]" />
  </div>,
  "VEGETARIAN": <FontAwesomeIcon icon={faCarrot} />,
  "VEGAN": <FontAwesomeIcon icon={faSeedling} />
}

const MenuItem = (props: { name: string, description: string, tags: Tag[], price: number | [number, number], sizes?: [string, string] }) => {
  const { name, description, tags, price } = props;

  const getPrices = () => {
    if (typeof price !== "object") {
      return (
        <p className="text-slate-300 font-bold">¥{price}</p>
      )
    } else if (props.sizes && price[0] === 0) {
      return (
        <div className="flex flex-col justify-center items-end text-sm min-w-[85px]">
          <p className="text-slate-300 font-bold"><span className="italic">{props.sizes[1]}</span> ¥{price[1]}</p>
        </div>
      )
    } else if (props.sizes) {
      return (
        <div className="flex flex-col justify-center items-end text-sm min-w-[85px]">
          <p className="text-slate-300 font-bold"><span className="italic">{props.sizes[0]}</span> ¥{price[0]}</p>
          <p className="text-slate-300 font-bold"><span className="italic">{props.sizes[1]}</span> ¥{price[1]}</p>
        </div>
      )
    } else {
      return <div className="text-slate-300 font-bold"></div>
    }
  }

  return (
    <div className="my-5">
      <div className="flex justify-between gap-3 md:gap-16 items-center">
        <p className="font-bold">{name} <span className="text-slate-400 font-normal">{description}</span></p>
        {getPrices()}
      </div>
      <div className="text-slate-500 flex items-center gap-3 text-xs">
        {tags.map((el, i) => {
          if (el !== Tag.gf) {
            return (
              <FontAwesomeIcon key={`${name}Tag${i}`} icon={el === Tag.v ? faCarrot : faSeedling} />
            )
          } else {
            return (
              <div key={`${name}Tag${i}`} className="relative">
                <FontAwesomeIcon icon={faWheatAwn} />
                <FontAwesomeIcon icon={faSlash} className="absolute inset-0 top-[-1px] left-[-1px]" />
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default MenuItem;