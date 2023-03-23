import { envsafe, str } from "envsafe";

export const env = envsafe({
  SERVICE_TYPE: str({
    default: 'azure'
  }),
  AZURE_CONNECTION_STRING: str({ default: 'r' }),
  AZURE_CONTAINER_NAME: str({
    default: 'dbbackups'
  }),
  AWS_ACCESS_KEY_ID: str({ default: 'r' }),
  AWS_SECRET_ACCESS_KEY: str({ default: 'r' }),
  AWS_S3_BUCKET: str({ default: 'r' }),
  AWS_S3_REGION: str({ default: 'r' }),
  BACKUP_DATABASE_URL: str({
    desc: 'The connection string of the database to backup.'
  }),
  BACKUP_CRON_SCHEDULE: str({
    desc: 'The cron schedule to run the backup on.',
    default: '0 5 * * *',
    allowEmpty: true
  }),
  AWS_S3_ENDPOINT: str({
    desc: 'The S3 custom endpoint you want to use.',
    default: '',
    allowEmpty: true,
  }),
})
