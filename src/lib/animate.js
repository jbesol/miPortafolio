const EXPO = 'cubic-bezier(0.16, 1, 0.3, 1)';
const QUART = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';

function observe(node, onEnter, threshold = 0.12) {
	const io = new IntersectionObserver(
		([e]) => { if (e.isIntersecting) { onEnter(); io.unobserve(node); } },
		{ threshold }
	);
	io.observe(node);
	return () => io.disconnect();
}

/** Sube desde abajo — títulos y texto */
export function fadeUp(node, delay = 0) {
	node.style.cssText += `opacity:0;transform:translateY(32px);transition:opacity .7s ${EXPO} ${delay}ms,transform .7s ${EXPO} ${delay}ms`;
	return { destroy: observe(node, () => { node.style.opacity = '1'; node.style.transform = 'translateY(0)'; }) };
}

/** Aparece con escala — tarjetas y grillas */
export function scaleIn(node, delay = 0) {
	node.style.cssText += `opacity:0;transform:scale(.94) translateY(12px);transition:opacity .55s ${QUART} ${delay}ms,transform .55s ${QUART} ${delay}ms`;
	return { destroy: observe(node, () => { node.style.opacity = '1'; node.style.transform = 'scale(1) translateY(0)'; }, 0.08) };
}

/** Solo opacidad — labels y elementos pequeños */
export function fadeIn(node, delay = 0) {
	node.style.cssText += `opacity:0;transition:opacity .6s ${QUART} ${delay}ms`;
	return { destroy: observe(node, () => { node.style.opacity = '1'; }) };
}

/** Efecto 3D tilt al hover — tarjetas interactivas */
export function tilt(node, intensity = 7) {
	const reset = `perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
	node.style.transition = `transform .4s ${QUART}`;
	node.style.willChange = 'transform';

	const onMove = (e) => {
		const r = node.getBoundingClientRect();
		const x = ((e.clientX - r.left) / r.width - 0.5) * intensity;
		const y = ((e.clientY - r.top) / r.height - 0.5) * -intensity;
		node.style.transition = 'transform .08s ease';
		node.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) translateZ(6px)`;
	};

	const onLeave = () => {
		node.style.transition = `transform .5s ${QUART}`;
		node.style.transform = reset;
	};

	node.addEventListener('mousemove', onMove);
	node.addEventListener('mouseleave', onLeave);
	return {
		destroy() {
			node.removeEventListener('mousemove', onMove);
			node.removeEventListener('mouseleave', onLeave);
		}
	};
}
