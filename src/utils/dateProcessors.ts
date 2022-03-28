import moment from 'moment'

import { DateFormats } from '../constants/types'

export const getDate = (date: Date | string, format: DateFormats): string => {
  return moment(date).format(format)
}
