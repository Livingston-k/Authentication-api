import logger from 'pino'
import dayjs from 'dayjs'
import config from 'config'
const level = config.get<string>('LogLevel')

const log = logger({
    transport:{
        target:'pino-pretty'
    },
    level,
    base:{
        pid:false
    },
    timestamp:()=>`"Time":"${dayjs().format()}"`
})

export default log 