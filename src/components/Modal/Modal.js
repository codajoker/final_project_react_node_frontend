import './Modal.css';
import { Button } from '../../Button.styled';
import { IoMdReturnLeft } from 'react-icons/io';

 const Modal = ({ active, setActive }) => {
    return <div className={active ? "modal active" : "modal"} onClick={()=> setActive(false)}>
        <div className={active ? "modal__container active" : "modal__container"} onClick={(e) => { e.stopPropagation() }}>
            <div className="exit-modal">
                <button className='exit-btn' type='button' onClick={()=> setActive(false)}>
                    <IoMdReturnLeft/>
                </button>
            </div>
            <div className="modal__content">
                <h2 className="modal__title">Рекомендована добова норма споживання калорій становить</h2>
            <span className="close-btn" onClick={()=> setActive(false)}>
            </span>
            <p className="norm-ccal">2800 <span className="norm-ccal__txt">ккал</span></p>
            <div className="product-div">
                <h3 className="product_title">Продукти, які ви не повинні їсти</h3>
            <ul className="product-list">
                <li>1. Борошняні вироби</li>
                <li>2. Молоко</li>
                <li>3. Червоне м`ясо</li>
                <li>4. Копченості</li>
                    </ul>   
                </div> 
                <Button type='button'>Почніть худнути</Button>
            </div>
        </div>
    </div>
}
export default Modal;