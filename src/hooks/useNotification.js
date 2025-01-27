import Toast from "../ui/Toast/Toast";
import { useCallback, useState } from "react";
import '../ui/Toast/Toast.css';


const useNotification = (position = 'top-left') => {

    const [toasts, setToasts] = useState([]);

    let timer;


    

    const triggerNotification = (notificationProps) => {

        const id = Date.now();
       
        setToasts([...toasts, { id: id, ...notificationProps, timer }]);
        timer = setTimeout(() => {
            closeNotification(id)
        }, notificationProps.duration);
    };

    
    const closeNotification = (id) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }



    const NotificationComponent =
        <div className={`'notification' ${position}`}>
            {toasts.map((toast) => <Toast key={toast.id} message={toast.message} duration={toast.duration} type={toast.type} id={toast.id} onClose={closeNotification} />)}

        </div>;

    return { NotificationComponent, triggerNotification };

}

export default useNotification;