import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import cs from 'classnames';
import { RangePickerProps } from 'antd/es/date-picker/generatePicker';
import DatePicker from '@/components/DatePicker';

const { RangePicker } = DatePicker;

export interface timeButtnsProps {
	name: string,
	value: number // 天数
}

type DateRangeCompProps = RangePickerProps<Dayjs> & {
	value?: [Dayjs, Dayjs],
	buttons?: timeButtnsProps[],
	tips?: string,
	onChange?: (value: [Dayjs, Dayjs]) => void
}

const DateRangeComp: React.FC<DateRangeCompProps> = (props) => {
	const { value, buttons, tips, onChange, ...reset } = props;
	const [currentTime, setCurrentTime] = useState<[Dayjs, Dayjs]>(props.value);

	const handleBtnClick = (time: timeButtnsProps) => {
		let endTime = dayjs().add(time.value, 'day');
		setCurrentTime([dayjs(), dayjs(endTime)]);
	};

	const handleChange = (value: [Dayjs, Dayjs]) => {
		setCurrentTime(value);
	};

	useEffect(() => {
		onChange?.(currentTime);
	}, [currentTime]);

	return (
		<>
			<div className="r-flex r-ai-c">
				<RangePicker
					value={ currentTime }
					separator="至"
					format="YYYY-MM-DD HH:mm"
					onChange={ handleChange }
					{ ...reset }
				/>
				{
					tips && <p className="r-fs-14 r-c-999 r-ml-12">{tips}</p>
				}
			</div>

			{
				buttons && (
					<div className="r-flex r-ai-c r-mt-10">
						{
							buttons.map(it => {
								return (
									<Button
										key={ it.name }
										size="small"
										type="ghost"
										className="r-mr-8"
										onClick={ () => handleBtnClick(it) }
									>
										{it.name}
									</Button>
								);
							})
						}
					</div>

				)
			}

		</>
	);
};

export default DateRangeComp;
