import Image from "next/image";
import styles from "./page.module.css";
import { styled } from "@pigment-css/react";

const Heading = styled("div")({
	fontSize: "4rem",
	fontWeight: "bold",
	padding: "10px 0px",
	color: "red",
});

const Row = styled.div`
	display: flex;
	flex-direction: row;
	color: red;
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
`;

const Text = styled.p`
	color: blue;
`;

export default function Home() {
	return (
		<main>
			<Heading> Welcome</Heading>
			<Text> Text here</Text>
			<Image src="#" alt="" />

			<Row>
				<div>Box</div>
				<div>Box</div>
				<div>Box</div>
				<div>Box</div>
			</Row>
			<Column>
				<div>Box</div>
				<div>Box</div>
				<div>Box</div>
				<div>Box</div>
			</Column>
		</main>
	);
}
