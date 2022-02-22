import { Link } from 'react-router-dom';
import { MdDoubleArrow } from 'react-icons/md';
import { IoHomeSharp } from 'react-icons/io5';
import { HiAdjustments, HiBeaker } from 'react-icons/hi';
import { FaTwitch } from 'react-icons/fa';
import { BsBarChartFill } from 'react-icons/bs';
import { DiReact, DiApple, DiAndroid } from 'react-icons/di';

//Icons https://react-icons.github.io/react-icons/ 

export default function SideBar() {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="logo">
                    <Link to="/" className="nav-link">
                        <span className="link-text logo-text">WAFFLE</span>
                        <div className="">
                            <MdDoubleArrow size="24" />
                        </div>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        <div className="nav-icon">
                            <IoHomeSharp size="18" />
                        </div>
                        <span className="link-text">Home</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/post" className="nav-link">
                        <div className="nav-icon">
                            <FaTwitch size="18" />
                        </div>
                        <span className="link-text">Twitch</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/myDash" className="nav-link">
                        <div className="nav-icon">
                            <HiAdjustments size="18" />
                        </div>
                        <span className="link-text">Settings</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/myDash" className="nav-link">
                        <div className="nav-icon">
                            <HiBeaker size="18" />
                        </div>
                        <span className="link-text">Experiment</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/myDash" className="nav-link">
                        <div className="nav-icon">
                            <BsBarChartFill size="18" />
                        </div>
                        <span className="link-text">Charts</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/myDash" className="nav-link">
                        <div className="nav-icon">
                            <DiAndroid size="18" />
                        </div>
                        <span className="link-text">Android</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/myDash" className="nav-link">
                        <div className="nav-icon">
                            <DiApple size="18" />
                        </div>
                        <span className="link-text">Apple</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/myDash" className="nav-link">
                        <div className="nav-icon">
                            <DiReact size="18" />
                        </div>
                        <span className="link-text">React</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )

}