export class LoggingService {
  logStatusChange(status: string) {
    console.log('Account status changed to ' + status);
  }
  logAccountCreated(name: string, status: string) {
    console.log('Account created ' + name + ', ' + status);
  }
}
