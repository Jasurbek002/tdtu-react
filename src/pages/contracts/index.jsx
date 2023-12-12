import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TitleBar, Container } from '../../components/Ui';
import Delete from '../../components/Ui/buttons/delete/delete';
import Edit from '../../components/Ui/buttons/edit/edit';
import { get } from '../../store/actions/getServce';
import { deleteItem } from '../../store/actions/deleteAction';

export default function Contracts() {
	const dispatch = useDispatch();
	const remove = id => {
		dispatch(deleteItem({ path: 'economy/delete', id: id, data: {} }));
	};
	useEffect(() => {
		dispatch(get('/economy'));
	}, [dispatch]);
	const { data } = useSelector(state => state.general);

	console.log(data);
	return (
		<Container>
			<TitleBar title={'Contracts'} link={'/economy/add'} />
			{data &&
				data.map((el, index) => (
					<div key={index} className='w-11/12 bg-white rounded-lg shadow-2xl p-5 flex justify-between my-5'>
						<p className='text-blue w-3/5'>
							<span className='text-xl text-grenn font-bold'>Mavzu: </span>
							{el.department}
						</p>
						<div className='w-[250px]'>
							<p className='text-xl'>
								<span className='text-xl text-grenn font-bold'>Mualif: </span>
								{el.name_en}
							</p>
							<p className='text-xl'>
								<span className='text-xl text-grenn font-bold'>Muddat: </span>
								{el.name_uz}
							</p>
						</div>
						<div className='flex flex-col items-center justify-between h-full'>
							<Edit />

							<Delete onClick={() => remove(el.econom_id)} />
						</div>
					</div>
				))}
		</Container>
	);
}
