import { PhoneIcon } from "../icons/icons";
import Button from "./ui/Button";
import Container from "./ui/Container";

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
