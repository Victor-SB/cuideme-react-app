import GoogleIcon from "../Images/google-icon.svg";

function LoginForm() {
    return <>
    <form action="">
        <div className="input-group">
            <label htmlFor="">Email</label>
            <input type="text" />
        </div>
        <div className="input-group">
            <label htmlFor="">Senha</label>
            <input type="password" />
        </div>
        <div>
            <label className="small checkbox-label">
                Matenha-me conectado
                <input type="checkbox" name="conectado" id="conectado" />
                <span className="checkmark"></span>
            </label>
        </div>
        <div className="input-group">
            <button>Entrar</button>
        </div>
        <div>
            <a href="#" className="signup-link">ou registre-se</a>
        </div>
        <div style={{ display: "flex", justifyContent: "center"}}>
            <div className="custom-hr"></div>
        </div>
        <div>
            <button className="google-button">
                <img src={GoogleIcon} alt="google icon" className="google-icon"/>
                Continue With Google
            </button>
        </div>
    </form>
    </>;
}

export default LoginForm;