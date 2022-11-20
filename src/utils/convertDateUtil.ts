import dayjs from "dayjs";
import 'dayjs/locale/ru';
dayjs.locale("ru");

export const convertDate = (date: string | undefined, format: string) => {
    return dayjs(date).format(format)
}