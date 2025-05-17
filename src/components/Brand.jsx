import BrandImg from "../Images/logo-cuide-me.png";

function Brand(){
    return <>
    <div>
    <img src={BrandImg} alt="Brand img" width={80} height={80}/>
    <p className="logo">Cuide.Me</p>
    </div>
    </>;
}

export default Brand;