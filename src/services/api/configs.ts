import { GetTokenSilentlyOptions } from "@auth0/auth0-react";
import { ExpenseTrackerApiClient } from "../generated";
import { Auth0Config } from "./auth0Config";

const client = new ExpenseTrackerApiClient();

export const setToken = (
  getAccessTokenSilently: (
    options?: GetTokenSilentlyOptions | undefined
  ) => Promise<string>
): void => {
  client.request.config.TOKEN = async (): Promise<string> => {
    const accessToken = await getAccessTokenSilently({
      authorizationParams: {
        audience: Auth0Config.audience,
      },
    });

    return accessToken;
  };
  client.request.config.WITH_CREDENTIALS = true;
};

export default client.default;
