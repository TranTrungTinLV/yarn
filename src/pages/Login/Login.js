import React , {useState}from 'react'

export default function Login(props) {
    const [userLogin , setUserLogin] = useState({taiKhoan:'' , matKhau:''})
    console.log(userLogin)
    const handleChange = (event) => {
        const {name , value} = event.target;
        setUserLogin({
            ...userLogin,
            [name]:value
        });
    }

    const handleLogin = (event) => {
        event.preventDefault();
        if(userLogin.taiKhoan === 'cyberlearn' && userLogin.matKhau === 'cyberlearn'){
            //thành cong thì chuyển về trang trước đó
            props.history.goBack();
            // props.history.push('/home');
        }else{
            alert('fail')
            return;
        }
    }
    return (
    <form className="container" onSubmit={handleLogin}>
        <h3 className="display-4">Login</h3>
        <div>
            <p>Tài khoản</p>
            <input name="taiKhoan" className="form-control" onChange={handleChange}/>
        </div>
        <div>
            <p>Mật Khẩu</p>
            <input name="matKhau" className="form-control" onChange={handleChange}/>
        </div>
        <div className="form-group">
            <button className="btn btn-success mx-0 my-3">
                Đăng nhập
            </button>
        </div>
    </form>  
    )
}
