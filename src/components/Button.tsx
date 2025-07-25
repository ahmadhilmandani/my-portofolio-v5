import { IconLoader2 } from "@tabler/icons-react"
import type React from "react"


type TButtonProp = {
  onClickProp: () => void,
  buttonType: string,
  isExtend: boolean,
  children: React.ReactNode,
  isLoading: boolean,
  buttonSize: string
}


const BUTTON_TYPE = {
  'PRIMARY': 'primary',
  'SECONDARY': 'secondary',
  'OUTLINE': 'outline',
}


export default function Button({ onClickProp = () => { }, buttonType = BUTTON_TYPE.OUTLINE, isExtend = false, children, isLoading = false, buttonSize = 'large' }: TButtonProp) {
  if (buttonType == BUTTON_TYPE.PRIMARY) {
    return (
      <>
        <button onClick={onClickProp} className={`relative z-10 bg-text-black font-semibold px-10 py-2.5 rounded-full overflow-hidden transition-all duration-400 hover:shadow-xl hover:shadow-sage-700/80 hover:cursor-pointer ${isExtend && 'w-full'} ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
          <div className={`relative z-50 text-sage-500 ${buttonSize == 'large' ? 'text-2xl' : buttonSize == 'base' ? 'text-[14px]' : 'text-[12px]'} font-semibold`}>
            {isLoading && <IconLoader2 className="animate-spin text-sm" />}
            {children}
          </div>

          <div className="absolute top-0 left-0 w-full h-[100%] z-40"
            style={{
              background: "radial-gradient(rgba(68, 68, 76, 0.8), transparent 70%)",
              opacity: 0.7,
              transform:
                "scale(2.3) rotate(-50deg)",
            }}
          ></div>
        </button>
      </>
    )
  }
  else if (buttonType == BUTTON_TYPE.SECONDARY) {
    return (
      <>
        <button onClick={onClickProp} className={`relative z-10 bg-khaki-700 font-semibold px-10 py-2.5 rounded-full overflow-hidden hover:bg-khaki-700/90 transition-all duration-400 hover:shadow-xl hover:shadow-khaki-600/80 hover:cursor-pointer ${isExtend && 'w-full'} ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
          <div className={`relative z-50 text-white ${buttonSize == 'large' ? 'text-2xl' : buttonSize == 'base' ? 'text-[14px]' : 'text-[12px]'} font-semibold`}>
            {isLoading && <IconLoader2 className="animate-spin text-sm" />}
            {children}
          </div>

          <div className="absolute top-0 left-0 w-full h-[100%] z-40"
            style={{
              background: "radial-gradient(rgba(208, 200, 190, 0.6), transparent 70%)",
              opacity: 0.7,
              transform:
                "scale(2.3) rotate(-50deg)",
            }}
          ></div>
        </button>
      </>
    )
  }
  else if (buttonType == BUTTON_TYPE.OUTLINE) {
    return (
      <>
        <button onClick={onClickProp} className={`relative z-10 border border-text-black bg-khaki-300 font-semibold px-10 py-2.5 rounded-full transition-all duration-400 hover:shadow-xl hover:shadow-text-black/10 hover:cursor-pointer ${isExtend && 'w-full'} ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
          <div className={`relative z-50 text-text-black ${buttonSize == 'large' ? 'text-2xl' : buttonSize == 'base' ? 'text-[14px]' : 'text-[12px]'} font-semibold`}>
            {isLoading && <IconLoader2 className="animate-spin text-sm" />}
            {children}
          </div>
        </button>
      </>
    )
  }
}