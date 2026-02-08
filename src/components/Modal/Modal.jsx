import React from "react";
import "./modal.css";

const Modal = ({ active, setActive, user }) => {
    if (!user) return null; 

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                <button 
                    className="modal__close" 
                    onClick={() => setActive(false)}
                >
                    x
                </button>
                
                <div className="modal__header">
                    {user.image && (
                        <img 
                            src={user.image} 
                            className="modal__avatar"
                        />
                    )}
                    <h2 className="modal__title">
                        {user.firstName} {user.lastName}
                    </h2>
                </div>
                
                <div className="modal__body">
                    <div >
                        <span className="modal__label">Возраст:</span>
                        <span className="modal__value">{user.age}</span>
                    </div>
                    
                    <div >
                        <span className="modal__label">Телефон:</span>
                        <span className="modal__value">{user.phone}</span>
                    </div>
                    
                    <div>
                        <span className="modal__label">Email:</span>
                        <span className="modal__value">{user.email}</span>
                    </div>
                    
                    <div>
                        <span className="modal__label">Адрес:</span>
                        <span className="modal__value">
                            {user.address}
                        </span>
                    </div>
                    
                    <div>
                        <span className="modal__label">Рост:</span>
                        <span className="modal__value">
                            {user.height} 
                        </span>
                    </div>
                    
                    <div>
                        <span className="modal__label">Вес:</span>
                        <span className="modal__value">
                            {user.weight} 
                        </span>
                    </div>
                    
                    <div>
                        <span className="modal__label">Страна:</span>
                        <span className="modal__value">{user.country}</span>
                    </div>
                    
                    <div>
                        <span className="modal__label">Город:</span>
                        <span className="modal__value">{user.city}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Modal;