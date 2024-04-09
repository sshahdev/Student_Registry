import StudentDetails from '@/components/StudentDetails/StudentDetails'
import './page.scss'

const page = async ({ params }: { params: { id: string } }) => {
	const id = params.id

	return <StudentDetails id={id} />
}

export default page
