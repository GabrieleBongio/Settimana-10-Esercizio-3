import { Dropdown, DropdownButton } from "react-bootstrap";
import SvgToast from "./SvgToast";
import SvgMenu from "./SvgMenu";

const TopSection = () => (
  <section className="my-3">
    <div className="d-flex align-items-center gap-5">
      <h1 className="fw-normal text-white">TV Shows</h1>
      <DropdownButton
        variant="dark"
        menuVariant="dark"
        drop="down-center"
        title="Genres"
        className="border border-1 border-white"
      >
        <Dropdown.Item>Action & Adenture</Dropdown.Item>
        <Dropdown.Item>Documentary</Dropdown.Item>
        <Dropdown.Item>Horror</Dropdown.Item>
        <Dropdown.Item>Sci-fi</Dropdown.Item>
      </DropdownButton>
      <div class="d-flex ms-auto d-none d-md-flex">
        <button class="btn btn-black border border-1 border-white border-opacity-50 rounded-0">
          <SvgToast></SvgToast>
        </button>
        <button class="btn btn-black border border-1 border-white border-opacity-50 rounded-0">
          <SvgMenu></SvgMenu>
        </button>
      </div>
    </div>
  </section>
);

export default TopSection;
