'use client';

import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/redux/store';
import { setIsModalOpen } from '@/redux/slices/ContactSlice';

export default function ContactModal() {
	const dispatch = useDispatch();

	const language = useSelector((state: RootState) => state.language.language);
	const modalIsOpen = useSelector(
		(state: RootState) => state.contactModal.modalIsOpen,
	);

	const isEn = language === 'en';

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		service: '',
		message: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [submitError, setSubmitError] = useState('');
	const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

	const closeModal = useCallback(() => {
		dispatch(setIsModalOpen(false));
	}, [dispatch]);

	useEffect(() => {
		if (!modalIsOpen) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				closeModal();
			}
		};

		const previousOverflow = document.body.style.overflow;

		document.addEventListener('keydown', handleKeyDown);
		document.body.style.overflow = 'hidden';

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.body.style.overflow = previousOverflow;
		};
	}, [modalIsOpen, closeModal]);

	useEffect(() => {
		if (modalIsOpen) return;

		setIsSubmitting(false);
		setIsSubmitted(false);
		setSubmitError('');
		setFieldErrors({});
		setFormData({
			name: '',
			email: '',
			service: '',
			message: '',
		});
	}, [modalIsOpen]);

	const services = isEn
		? [
				'Job Opportunity',
				'Business Website',
				'Website Redesign',
				'Custom Features',
				'Other Inquiry',
			]
		: [
				'Oportunidad Laboral',
				'Sitio Web para Negocio',
				'Rediseño de Sitio Web',
				'Funciones Personalizadas',
				'Otra Consulta',
			];

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (isSubmitting) return;

		setIsSubmitting(true);
		setSubmitError('');
		setFieldErrors({});

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const result = await response.json().catch(() => null);

			if (!response.ok) {
				const error = result?.error;

				const fieldErrorMap: Record<string, string> = {
					MISSING_NAME: 'name',
					NAME_TOO_LONG: 'name',
					MISSING_EMAIL: 'email',
					INVALID_EMAIL: 'email',
					EMAIL_TOO_LONG: 'email',
					MISSING_SERVICE: 'service',
					INVALID_SERVICE: 'service',
					MISSING_MESSAGE: 'message',
					MESSAGE_TOO_LONG: 'message',
				};

				if (error && fieldErrorMap[error]) {
					const field = fieldErrorMap[error];

					const messages: Record<string, { en: string; es: string }> =
						{
							MISSING_NAME: {
								en: 'Please enter your name.',
								es: 'Por favor, ingresa tu nombre.',
							},
							NAME_TOO_LONG: {
								en: 'Your name must be 100 characters or fewer.',
								es: 'Tu nombre debe tener 100 caracteres o menos.',
							},
							MISSING_EMAIL: {
								en: 'Please enter your email address.',
								es: 'Por favor, ingresa tu correo electrónico.',
							},
							INVALID_EMAIL: {
								en: 'Please enter a valid email address.',
								es: 'Por favor, ingresa un correo electrónico válido.',
							},
							EMAIL_TOO_LONG: {
								en: 'Your email must be 254 characters or fewer.',
								es: 'Tu correo debe tener 254 caracteres o menos.',
							},
							MISSING_SERVICE: {
								en: 'Please select a service.',
								es: 'Por favor, selecciona un servicio.',
							},
							INVALID_SERVICE: {
								en: 'Please select a valid service.',
								es: 'Por favor, selecciona un servicio válido.',
							},
							MISSING_MESSAGE: {
								en: 'Please enter a message.',
								es: 'Por favor, escribe un mensaje.',
							},
							MESSAGE_TOO_LONG: {
								en: 'Your message must be 5,000 characters or fewer.',
								es: 'Tu mensaje debe tener 5,000 caracteres o menos.',
							},
						};

					const message = messages[error];

					setFieldErrors({
						[field]: isEn ? message.en : message.es,
					});
				} else {
					setSubmitError(
						isEn
							? 'Unable to send your message right now. Please try again.'
							: 'No se pudo enviar tu mensaje. Inténtalo de nuevo.',
					);
				}

				return;
			}

			setIsSubmitted(true);

			window.setTimeout(() => {
				closeModal();
			}, 2500);
		} catch {
			setSubmitError(
				isEn
					? 'Unable to send your message. Please check your connection and try again.'
					: 'No se pudo enviar tu mensaje. Comprueba tu conexión e inténtalo de nuevo.',
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	if (!modalIsOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto px-4 pb-6 pt-28 sm:px-6 sm:pt-32">
			<button
				type="button"
				aria-label={
					isEn ? 'Close contact modal' : 'Cerrar ventana de contacto'
				}
				onClick={closeModal}
				className="fixed inset-0 h-full w-full cursor-default bg-neutral-950/80 backdrop-blur-md animate-in fade-in duration-300"
			/>

			<div
				role="dialog"
				aria-modal="true"
				aria-labelledby="contact-modal-title"
				className="border-flow relative z-10 my-0 w-full max-w-xl overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/95 p-5 shadow-2xl backdrop-blur-xl animate-in zoom-in-95 duration-200 sm:p-8"
			>
				<div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
				<div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

				<div className="relative z-10 mb-6 flex items-start justify-between gap-4">
					<div>
						<span className="mb-1 block font-mono text-xs uppercase tracking-widest text__color--blue">
							{isEn ? 'DIRECT MESSAGE' : 'MENSAJE DIRECTO'}
						</span>

						<h3
							id="contact-modal-title"
							className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl"
						>
							{isEn ? "Let's Connect" : 'Iniciar un Proyecto'}
						</h3>

						<p className="mt-2 text-sm leading-relaxed text-neutral-400">
							{isEn
								? "Thanks for stopping by! Whether you're interested in working together, discussing a project, or exploring a potential opportunity, I'd love to hear from you."
								: 'Ya sea que quieras colaborar en un proyecto, hablar sobre desarrollo web o conversar sobre una oportunidad laboral, me encantaría saber de ti.'}
						</p>
					</div>

					<button
						type="button"
						onClick={closeModal}
						aria-label={
							isEn
								? 'Close contact modal'
								: 'Cerrar ventana de contacto'
						}
						className="shrink-0 rounded-full p-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
					>
						<svg
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>

				{isSubmitted ? (
					<div
						role="status"
						className="relative z-10 flex flex-col items-center justify-center py-12 text-center"
					>
						<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M5 13l4 4L19 7"
								/>
							</svg>
						</div>

						<h4 className="mb-2 font-heading text-xl font-bold text-white">
							{isEn ? 'Thank You!' : '¡Gracias!'}
						</h4>

						<p className="max-w-xs text-sm text-neutral-400">
							{isEn
								? 'Your message has been sent successfully. I’ll get back to you soon.'
								: 'Tu mensaje se ha enviado correctamente. Te responderé pronto.'}
						</p>
					</div>
				) : (
					<form
						onSubmit={handleSubmit}
						className="relative z-10 space-y-5"
					>
						<fieldset disabled={isSubmitting}>
							<legend className="mb-2 block font-mono text-xs uppercase text-neutral-400">
								{isEn
									? 'What can I help you with?'
									: '¿En qué puedo ayudarte?'}
							</legend>

							<div className="flex flex-wrap gap-2">
								{services.map((service) => (
									<button
										type="button"
										key={service}
										onClick={() => {
											setFormData((previous) => ({
												...previous,
												service,
											}));

											setFieldErrors((previous) => ({
												...previous,
												service: '',
											}));
										}}
										aria-pressed={
											formData.service === service
										}
										className={`rounded-xl border px-3 py-2 font-mono text-xs transition-all ${
											formData.service === service
												? 'border-blue-500/40 bg-blue-500/10 text-blue-400'
												: 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
										}`}
									>
										{service}
									</button>
								))}
							</div>

							{fieldErrors.service && (
								<p
									role="alert"
									className="mt-2 text-sm text-red-400"
								>
									{fieldErrors.service}
								</p>
							)}
						</fieldset>

						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<div>
								<label
									htmlFor="contact-name"
									className="mb-1 block font-mono text-xs uppercase text-neutral-400"
								>
									{isEn ? 'Full Name' : 'Tu Nombre'}
								</label>

								<input
									id="contact-name"
									name="name"
									type="text"
									autoComplete="name"
									maxLength={100}
									required
									disabled={isSubmitting}
									value={formData.name}
									onChange={(event) => {
										setFormData((previous) => ({
											...previous,
											name: event.target.value,
										}));

										setFieldErrors((previous) => ({
											...previous,
											name: '',
										}));
									}}
									placeholder={
										isEn ? 'John Doe' : 'Carlos Pérez'
									}
									className="w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 font-heading text-sm text-white transition-colors placeholder:text-neutral-600 focus:border-blue-500/50 focus:outline-none disabled:opacity-60"
								/>

								{fieldErrors.name && (
									<p
										role="alert"
										className="mt-2 text-sm text-red-400"
									>
										{fieldErrors.name}
									</p>
								)}
							</div>

							<div>
								<label
									htmlFor="contact-email"
									className="mb-1 block font-mono text-xs uppercase text-neutral-400"
								>
									{isEn ? 'Email' : 'Tu Correo'}
								</label>

								<input
									id="contact-email"
									name="email"
									type="email"
									autoComplete="email"
									maxLength={254}
									required
									disabled={isSubmitting}
									value={formData.email}
									onChange={(event) => {
										setFormData((previous) => ({
											...previous,
											email: event.target.value,
										}));

										setFieldErrors((previous) => ({
											...previous,
											email: '',
										}));
									}}
									placeholder="john@example.com"
									className="w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 font-heading text-sm text-white transition-colors placeholder:text-neutral-600 focus:border-blue-500/50 focus:outline-none disabled:opacity-60"
								/>

								{fieldErrors.email && (
									<p
										role="alert"
										className="mt-2 text-sm text-red-400"
									>
										{fieldErrors.email}
									</p>
								)}
							</div>
						</div>

						<div>
							<label
								htmlFor="contact-message"
								className="mb-1 block font-mono text-xs uppercase text-neutral-400"
							>
								{isEn ? 'Message' : 'Mensaje'}
							</label>

							<textarea
								id="contact-message"
								name="message"
								required
								maxLength={5000}
								rows={4}
								disabled={isSubmitting}
								value={formData.message}
								onChange={(event) => {
									setFormData((previous) => ({
										...previous,
										message: event.target.value,
									}));

									setFieldErrors((previous) => ({
										...previous,
										message: '',
									}));
								}}
								placeholder={
									isEn
										? 'Tell me about your business, goals, or what you need...'
										: 'Cuéntame sobre tu negocio, tus objetivos o lo que necesitas...'
								}
								className="w-full resize-y rounded-2xl border border-neutral-800 bg-neutral-950 p-4 font-heading text-sm text-white transition-colors placeholder:text-neutral-600 focus:border-blue-500/50 focus:outline-none disabled:opacity-60"
							/>

							{fieldErrors.message && (
								<p
									role="alert"
									className="mt-2 text-sm text-red-400"
								>
									{fieldErrors.message}
								</p>
							)}
						</div>

						{submitError && (
							<p role="alert" className="text-sm text-red-400">
								{submitError}
							</p>
						)}

						<button
							type="submit"
							disabled={isSubmitting}
							className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-blue-500/30 bg-blue-500/10 px-6 py-4 font-mono text-xs font-semibold text-blue-300 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-500/20 hover:text-white hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.35)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
						>
							{isSubmitting ? (
								<span className="inline-flex items-center gap-2">
									<svg
										className="h-4 w-4 animate-spin"
										fill="none"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											strokeWidth="4"
										/>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
										/>
									</svg>
									{isEn ? 'Sending...' : 'Enviando...'}
								</span>
							) : (
								<span>
									{isEn
										? 'Send Message →'
										: 'Enviar Mensaje →'}
								</span>
							)}
						</button>
					</form>
				)}
			</div>
		</div>
	);
}
