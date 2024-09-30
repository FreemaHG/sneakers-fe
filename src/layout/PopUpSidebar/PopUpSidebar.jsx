import { useContext, useState } from 'react';
import axios, { AxiosError } from 'axios';
import cn from 'classnames';

import { CartContext } from '../../context/CartContextProvider.jsx';
import Cart from '../Cart/Cart.jsx';
import InfoBlock from '../../components/InfoBlock/InfoBlock.jsx';
import getEnvVariables from '../../helpers/envVariables.js';

import styles from './PopUpSidebar.module.scss';


/**
 * @component
 * @description Сайдбар с товарами в корзине
 * @prop {boolean} visibleSidebar - флаг для отображения / скрытия сайдбара
 * @prop {function} onClose - функция для закрытия сайдбара
 */
const PopUpSidebar = ({ visibleSidebar, onClose }) => {

	console.log(visibleSidebar)

	// переменные окружения
	const envVariables = getEnvVariables();

	// получаем данные из контекста о товарах в корзине + функция для смены состояния с товарами в корзине
	const { productsInCart, dispatchCart } = useContext(CartContext);

	// флаг для вывода блока с текстом успешного заказа
	const [isOrderSuccess, setIsOrderSuccess] = useState(false);
	// флаг для вывода лоадера при оформлении заказа
	const [isLoading, setIsLoading] = useState(false);
	// номер заказа
	const [orderNum, setOrderNum] = useState(false);

	// оформление заказа
	const orderRegister = async () => {
		setIsLoading(true);
		try {
			const { data } = await axios.post(`${envVariables.BASE_URL}/orders`, {
				products_id: productsInCart.map(product => product.id),
			});
			setIsLoading(false);
			setIsOrderSuccess(true);
			setOrderNum(data.id)
			dispatchCart({ type: 'CLEAR' });  // очистка корзины в хранилище
		} catch (error) {
			if (error instanceof AxiosError) {
				alert('Не удалось создать заказ. Попробуйте повторить позже.')
				// текст сообщения с ошибкой с бэка
				console.error(error.response.data['detail']);
				setIsLoading(false);
			}
		}
	};

	// закрытие сайдбара и смена флага
	const closeSidebar = () => {
		onClose();  // закрытие сайдбара
		setIsOrderSuccess(false);  // смена флага для вывода блока после успешного оформления заказа
	};

	return (
		<div className={cn(styles['overlay'], {
			[styles['overlay-visible']]: visibleSidebar
		})} onClick={onClose}>
			{/* event.stopPropagation() останавливаем действие при клике по самому сайдбару (чтобы сайдбар не закрывался) */}
			<div className={styles['sidebar']} onClick={event => event.stopPropagation()}>
				<div className={styles['header']}>
					<h2 className={styles['title']}>Корзина</h2>
					{productsInCart.length > 0 &&
						<img
							className={styles['remove-button']}
							src="/images/icons/remove.svg"
							alt="Закрыть корзину"
							onClick={() => onClose()}
						/>}
				</div>
				<div className={styles['body']}>
					{isOrderSuccess && !isLoading &&
						<InfoBlock
							image="/images/order-success.png"
							title="Заказ оформлен!"
							description={`Ваш заказ #${orderNum} скоро будет передан курьерской доставке`}
							titleGreen={true}
							onClose={closeSidebar}
						/>
					}
					{!isOrderSuccess && productsInCart.length > 0 &&
						<Cart
							onClick={orderRegister}
							loading={isLoading}
						/>
					}
					{!isOrderSuccess && !isLoading && productsInCart.length === 0 &&
						<InfoBlock
							image="/images/empty-cart.svg"
							title="Корзина пустая"
							description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
							onClose={onClose}
						/>
					}
				</div>
			</div>
		</div>
	);
};

export default PopUpSidebar;