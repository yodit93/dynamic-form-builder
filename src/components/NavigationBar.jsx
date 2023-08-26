import { useRef } from 'react';
import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
 const navList = useRef(null);
 
  const handleShow = (e) => {
    console.log(e.target)
    navList.current.classList.add('show');    
 };
const handleHide = () => {
    navList.current.classList.remove('show');
};
return (
    <nav className="navbar">
        <NavLink className="my-logo">FormFlex</NavLink>
        <Button className="menu-toggle" onClick={handleShow}>
            <MenuOutlined />
        </Button>
        <div className="click-event" ref={navList}>
            <div className="close-btn" onClick={handleHide}>&#10005;</div>
            <div className="form-right">
                <NavLink className="my-form" to="/dynamic-form-builder/my-form" onClick={handleHide}>My form</NavLink>
                <NavLink className="create-form" to="/dynamic-form-builder" onClick={handleHide}>Create form</NavLink>

            </div>
        </div>
    </nav>
    );
};

export default Navbar;
