import React from 'react';
import styled from 'styled-components';

export const CardWrapper = styled.div`
	overflow: hidden;
	padding: 0 0 32px;
	margin: 48px auto 0;
	width: 300px;
	font-family: Quicksand, arial, sans-serif;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
	border-radius: 5px;
`;

export const CardBody = styled.div`
	display: flex;
	padding-right: 32px;
	padding-left: 32px;
`;

export const CardButton = styled.button`
	display: block;
	padding: 10px;
	margin: 48px auto 0;
	width: 300px;
	font-size: 14px;
	font-weight: 700;
	color: #fff;
	background-color: #e5195f;
	border: 0;
	border-radius: 35px;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
	cursor: pointer;
	transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

	&:hover {
		box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
		transform: translate(0, -5px);
	}
`;
