
import StudentTable from '@/components/StudentTable/StudentTable'
import { ToastContainer, toast } from 'react-toastify'

// It renders the StudentTable component and includes the ToastContainer for notifications.
const page = () => {
	return (
		<>
			{/* ToastContainer for displaying notifications */}
			<ToastContainer />

			{/* StudentTable component to display student data */}
			<StudentTable />
		</>
	)
}

export default page