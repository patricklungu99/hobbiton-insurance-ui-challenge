import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
    return(
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="cursor-pointer" onClick={() => {navigate('/')}}>
              <img src="https://www.hobbiton.tech/assets/logo2-7db998ca.png" width={100} height={100} />
            </div>
          </div>
        </div>
    )
} 

export default Header;
