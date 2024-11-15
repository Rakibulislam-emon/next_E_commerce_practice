import BottomHeader from "./BottomHeader"
import MiddleHeader from "./MiddleHeader"
import TopHeader from "./TopHeader"

export default function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white text-black">
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
    </div>
  )
}
