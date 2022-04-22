import React from "react";
import { useForm } from "react-hook-form";

const AddUser = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<div>
			<div className="w-50 mx-auto">
				<form
					className="d-flex flex-column"
					onSubmit={handleSubmit(onSubmit)}
				>
					<input
						className="mb-3 p-2"
						placeholder="Full Name"
						{...register("name", { required: true })}
					/>
					<input
						className="mb-3 p-2"
						placeholder="user"
						{...register("user", { required: true })}
					/>
					<input
						className="mb-3 p-2"
						placeholder="E-mail Address"
						{...register("email", { required: true })}
					/>
					<input
						className="mb-3 p-2"
						placeholder="Password"
						{...register("password", { required: true })}
					/>
					<input className="mb-3 py-1" type="submit" value="Add User" />
				</form>
			</div>
		</div>
	);
};

export default AddUser;