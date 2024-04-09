import { StoreProvider } from '@/lib/store/StoreProvider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

// Metadata for the page
export const metadata: Metadata = {
	title: 'Student Registry',
	description: 'Student CRUD operations',
	icons: {
		icon: 'https://res.cloudinary.com/ddhrf759q/image/upload/v1709032404/kzowepi274d9mvhpqt1g.png',
	},
}


const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	return (
		<StoreProvider>
			<html lang='en'>
				<body className={inter.className}>
					{children}
				</body>
			</html>
		</StoreProvider>
	)
}

export default RootLayout
