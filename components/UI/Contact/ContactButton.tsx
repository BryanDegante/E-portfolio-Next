'use client';

import { FaEnvelope } from 'react-icons/fa';
import styles from '../Expand Button/ExpandLink.module.css'
import { useDispatch} from 'react-redux';
import { setIsModalOpen } from '@/redux/slices/ContactSlice';


export default function ContactButton(){
	const dispatch = useDispatch();
	return (
		<button  className={styles.expand} onClick={() => dispatch(setIsModalOpen(true))} type='button'>
			<span className={styles.sign}>
				<FaEnvelope className='text-text' />
			</span>

			<span className={styles.text}>
				Contact
			</span>
		</button>
	);
};
