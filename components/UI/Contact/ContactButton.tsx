import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import styles from '../Expand Button/ExpandLink.module.css'

export default function ContactButton(){
	return (
		<a  className={styles.expand}>
			<span className={styles.sign}>
				<FaEnvelope className='text-text' />
			</span>

			<span className={styles.text}>
				Contact
			</span>
		</a>
	);
};
