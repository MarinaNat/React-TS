import { useContext } from 'react'
import { CreateProduct } from '../components/CreateProduct'
import { ErrorMessage } from '../components/ErrorMessage'
import { Loader } from '../components/Loader'
import { Modal } from '../components/Modal'
import { Product } from '../components/Product'
import { ModalContext } from '../context/ModalContex'
import { useProducts } from '../hooks/products'
import { IProduct } from '../models'

export function ProguctsPage() {
	const { loading, error, products, addProduct } = useProducts()
	const { modal, open, close } = useContext(ModalContext)

	const createHandler = (product: IProduct) => {
		close()
		addProduct(product)
	}

	return (
		<div className="container mx-auto max-w-2xl pt-5">
			{loading && <Loader />}
			{error && <ErrorMessage error={error} />}
			{products.map(
				product =>
					<Product product={product} key={product.id} />)}

			{modal && <Modal
				title='Create new product'
				onClose={close}>
				<CreateProduct onCreate={createHandler} />
			</Modal>}
			<button
				className='fixed bottom-5 right-5 rounded-full bg-red-700 px-4 py-2 text-white text-2xl'
				onClick={open}
			>+</button>
		</div>
	)
}
