import { PhoneIcon } from "../../../icons/Icons";
import Button from "../../Atoms/Button";
import Container from "../../Atoms/Container";

const Header = () => {
  return (
    <div className="md:drop-shadow-none drop-shadow-md bg-white">
      <Container>
        <div className="flex justify-between items-center py-4">
          <div className="w-[6rem]">
            <img src="/CompanyLogo.png" className="w-full" />
          </div>
          <Button
            variant="outline_primary"
            size={"md_icon"}
            className="drop-shadow-md"
          >
            <PhoneIcon color="primary" />
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Header;
