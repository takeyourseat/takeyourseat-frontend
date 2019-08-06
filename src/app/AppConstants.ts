export class AppConstants {
  public static CLIENT_ID = (): string => 'angular-app';
  public static CLIENT_SECRET = (): string => 'yKUiY5q5kQLmvkkCjgAs4WqSKNBQ5JDM1LOYshl3';
  public static AUTH_GET_TOKEN_URL = (): string => `http://${window.location.hostname}:8083/oauth/token`;
  public static USER_MANAGEMENT_URL = (): string => `http://${window.location.hostname}:8085/`;
  public static AUTHORIZATION_SERVICE_URL = (): string => `http://${window.location.hostname}:8086/api/v01/`;
  public static NOTIFICATION_SERVICE_URL = (): string => `http://${window.location.hostname}:8087/api/v01/`;
  public static PLACE_MANAGEMENT_API = (): string => `http://${window.location.hostname}:8084/api/`;
}
