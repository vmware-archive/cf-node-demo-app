

/*
Get New Relic configuration and app name from environment
*/  

var vcap_application = JSON.parse(process.env.VCAP_APPLICATION);

var app_name = vcap_application.name;

var vcap_services = JSON.parse(process.env.VCAP_SERVICES);

var license_key = vcap_services.newrelic[0].credentials.licenseKey;

/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
  /**
   * Array of application names.
   */
  app_name: [app_name],
  /**
   * Your New Relic license key.
   */



  license_key: license_key,
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'info'
  }
}
