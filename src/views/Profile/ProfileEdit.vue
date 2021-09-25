<template>
  <div class="profile-edit">
    <div class="py-4">
      <div class="container">
        <div class="row">
          <!-- Main Content -->
          <aside class="col-md-4">
            <div
              class="mb-3 border rounded bg-white profile-box text-center w-10"
            >
              <div class="p-4 d-flex align-items-center">
                <img
                  :src="user.image_url"
                  class="img-fluid rounded-circle"
                  alt="Responsive image"
                />
              </div>
              <div class="p-4">
                <label
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="Upload New Picture"
                  class="btn btn-info m-0"
                  for="fileAttachmentBtn"
                >
                  <i class="feather-image"></i>
                  <input
                    id="fileAttachmentBtn"
                    name="file-attachment"
                    type="file"
                    class="d-none"
                  />
                </label>
                <button
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="Delete"
                  type="submit"
                  class="btn btn-danger"
                >
                  <i class="feather-trash-2"></i>
                </button>
              </div>
              <input type="text" v-model="user.image_url" />
            </div>
            <div class="border rounded bg-white mb-3">
              <div class="box-title border-bottom p-3">
                <h6 class="m-0">About</h6>
                <p class="mb-0 mt-0 small">
                  Tell everyone about yourself in a few sentences.
                </p>
              </div>
              <div class="box-body">
                <div class="p-3 border-bottom">
                  <div class="form-group mb-4">
                    <label class="mb-1">BIO</label>
                    <div class="position-relative">
                      <textarea
                        v-model="user.bio"
                        class="form-control"
                        rows="4"
                        name="text"
                        placeholder="Enter Bio"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="overflow-hidden text-center p-3">
                  <a
                    class="font-weight-bold btn btn-light rounded p-3 d-block"
                    href="#"
                    v-on:click="userSecondaryInfoApiPatch()"
                  >
                    SAVE
                  </a>
                </div>
              </div>
            </div>
            <div class="border rounded bg-white mb-3">
              <div class="box-title border-bottom p-3">
                <h6 class="m-0">Social profiles</h6>
                <p class="mb-0 mt-0 small">
                  Add elsewhere links to your profile.
                </p>
              </div>
              <div class="box-body">
                <div class="p-3 border-bottom">
                  <div class="position-relative icon-form-control mb-2">
                    <i
                      class="feather-instagram position-absolute text-warning"
                    ></i>
                    <input
                      v-model="instagram_link"
                      placeholder="Add Instagram link"
                      type="text"
                      class="form-control"
                    />
                  </div>
                  <div class="position-relative icon-form-control mb-2">
                    <i
                      class="feather-facebook position-absolute text-primary"
                    ></i>
                    <input
                      v-model="facebook_link"
                      placeholder="Add Facebook link"
                      type="text"
                      class="form-control"
                    />
                  </div>
                  <div class="position-relative icon-form-control mb-2">
                    <i class="feather-twitter position-absolute text-info"></i>
                    <input
                      v-model="twitter_link"
                      placeholder="Add Twitter link"
                      type="text"
                      class="form-control"
                    />
                  </div>
                  <div class="position-relative icon-form-control mb-2">
                    <i
                      class="feather-youtube position-absolute text-danger"
                    ></i>
                    <input
                      v-model="linkedin_link"
                      placeholder="Add Youtube link"
                      type="text"
                      class="form-control"
                    />
                  </div>
                  <div class="position-relative icon-form-control mb-0">
                    <i class="feather-github position-absolute text-dark"></i>
                    <input
                      v-model="github_link"
                      placeholder="Add Github link"
                      type="text"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="overflow-hidden text-center p-3">
                  <a
                    class="font-weight-bold btn btn-light rounded p-3 d-block"
                    href="#"
                    v-on:click="socialMediaApiPatch()"
                  >
                    Update Social Profiles
                  </a>
                </div>
              </div>
            </div>
          </aside>
          <main class="col-md-8">
            <div class="border rounded bg-white mb-3">
              <div class="box-title border-bottom p-3">
                <h6 class="m-0">Edit Basic Info</h6>
                <p class="mb-0 mt-0 small">
                  Update your profile with the following information.
                </p>
              </div>
              <div class="box-body p-3">
                <form class="js-validate" novalidate="novalidate">
                  <div class="row">
                    <!-- Input -->
                    <div class="col-sm-6 mb-2">
                      <div class="js-form-message">
                        <label id="nameLabel" class="form-label">
                          First Name
                          <span class="text-danger">*</span>
                        </label>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name="name"
                            v-model="user.first_name"
                            placeholder="Enter your first name"
                            aria-label="Enter your first name"
                            required=""
                            aria-describedby="firstnameLabel"
                            data-msg="Please enter your first name."
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                          />
                          <small class="form-text text-muted"
                            >Displayed on your public profile, notifications and
                            other places.</small
                          >
                        </div>
                      </div>
                    </div>
                    <!-- End Input -->
                    <!-- Input -->
                    <div class="col-sm-6 mb-2">
                      <div class="js-form-message">
                        <label id="usernameLabel" class="form-label">
                          Last Name
                          <span class="text-danger">*</span>
                        </label>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name="username"
                            v-model="user.last_name"
                            placeholder="Enter your last name"
                            aria-label="Enter your last name"
                            required=""
                            aria-describedby="lastnameLabel"
                            data-msg="Please enter your last name."
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- End Input -->
                  </div>
                  <label class="form-label">
                    Birth date
                    <span class="text-danger">*</span>
                  </label>
                  <div class="row">
                    <!-- Input -->
                    <div class="col-md-6 mb-3 mb-sm-6">
                      <div class="js-form-message">
                        <div class="form-group">
                          <select
                            v-model="date_of_birth_month"
                            class="form-control custom-select"
                            required=""
                            data-msg="Please select month."
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                          >
                            <option value="">Select month</option>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4" selected="selected">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <!-- End Input -->
                    <!-- Input -->
                    <div class="col-sm-4 col-md-2 mb-3 mb-sm-6">
                      <div class="js-form-message">
                        <div class="form-group">
                          <select
                            class="form-control custom-select"
                            required=""
                            v-model="date_of_birth_day"
                            data-msg="Please select date."
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                          >
                            <option value="">Select date</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12" selected="selected">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <!-- End Input -->
                    <!-- Input -->
                    <div class="col-sm-4 col-md-2 mb-3 mb-sm-6">
                      <div class="js-form-message">
                        <div class="form-group">
                          <select
                            v-model="date_of_birth_year"
                            class="form-control custom-select"
                            required=""
                            data-msg="Please select year."
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                          >
                            <option value="">Select year</option>
                            <option value="1900">1900</option>
                            <option value="1901">1901</option>
                            <option value="1902">1902</option>
                            <option value="1903">1903</option>
                            <option value="1904">1904</option>
                            <option value="1905">1905</option>
                            <option value="1906">1906</option>
                            <option value="1907">1907</option>
                            <option value="1908">1908</option>
                            <option value="1909">1909</option>
                            <option value="1910">1910</option>
                            <option value="1911">1911</option>
                            <option value="1912">1912</option>
                            <option value="1913">1913</option>
                            <option value="1914">1914</option>
                            <option value="1915">1915</option>
                            <option value="1916">1916</option>
                            <option value="1917">1917</option>
                            <option value="1918">1918</option>
                            <option value="1919">1919</option>
                            <option value="1920">1920</option>
                            <option value="1921">1921</option>
                            <option value="1922">1922</option>
                            <option value="1923">1923</option>
                            <option value="1924">1924</option>
                            <option value="1925">1925</option>
                            <option value="1926">1926</option>
                            <option value="1927">1927</option>
                            <option value="1928">1928</option>
                            <option value="1929">1929</option>
                            <option value="1930">1930</option>
                            <option value="1931">1931</option>
                            <option value="1932">1932</option>
                            <option value="1933">1933</option>
                            <option value="1934">1934</option>
                            <option value="1935">1935</option>
                            <option value="1936">1936</option>
                            <option value="1937">1937</option>
                            <option value="1938">1938</option>
                            <option value="1939">1939</option>
                            <option value="1940">1940</option>
                            <option value="1941">1941</option>
                            <option value="1942">1942</option>
                            <option value="1943">1943</option>
                            <option value="1944">1944</option>
                            <option value="1945">1945</option>
                            <option value="1946">1946</option>
                            <option value="1947">1947</option>
                            <option value="1948">1948</option>
                            <option value="1949">1949</option>
                            <option value="1950">1950</option>
                            <option value="1951">1951</option>
                            <option value="1952">1952</option>
                            <option value="1953">1953</option>
                            <option value="1954">1954</option>
                            <option value="1955">1955</option>
                            <option value="1956">1956</option>
                            <option value="1957">1957</option>
                            <option value="1958">1958</option>
                            <option value="1959">1959</option>
                            <option value="1960">1960</option>
                            <option value="1961">1961</option>
                            <option value="1962">1962</option>
                            <option value="1963">1963</option>
                            <option value="1964">1964</option>
                            <option value="1965">1965</option>
                            <option value="1966">1966</option>
                            <option value="1967">1967</option>
                            <option value="1968">1968</option>
                            <option value="1969">1969</option>
                            <option value="1970">1970</option>
                            <option value="1971">1971</option>
                            <option value="1972">1972</option>
                            <option value="1973">1973</option>
                            <option value="1974">1974</option>
                            <option value="1975">1975</option>
                            <option value="1976">1976</option>
                            <option value="1977">1977</option>
                            <option value="1978">1978</option>
                            <option value="1979">1979</option>
                            <option value="1980">1980</option>
                            <option value="1981">1981</option>
                            <option value="1982">1982</option>
                            <option value="1983">1983</option>
                            <option value="1984">1984</option>
                            <option value="1985">1985</option>
                            <option value="1986" selected="selected"
                              >1986</option
                            >
                            <option value="1987">1987</option>
                            <option value="1988">1988</option>
                            <option value="1989">1989</option>
                            <option value="1990">1990</option>
                            <option value="1991">1991</option>
                            <option value="1992">1992</option>
                            <option value="1993">1993</option>
                            <option value="1994">1994</option>
                            <option value="1995">1995</option>
                            <option value="1996">1996</option>
                            <option value="1997">1997</option>
                            <option value="1998">1998</option>
                            <option value="1999">1999</option>
                            <option value="2000">2000</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                            <option value="2004">2004</option>
                            <option value="2005">2005</option>
                            <option value="2006">2006</option>
                            <option value="2007">2007</option>
                            <option value="2008">2008</option>
                            <option value="2009">2009</option>
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <!-- End Input -->
                    <!-- Input -->
                    <div class="col-sm-4 col-md-2 mb-2">
                      <div class="js-form-message">
                        <div class="form-group">
                          <select
                            class="form-control custom-select"
                            required=""
                            v-model="user.gender"
                            data-msg="Please select your gender."
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                          >
                            <option value="male" selected="">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="null" disabled selected
                              >Gender</option
                            >
                          </select>
                        </div>
                      </div>
                    </div>
                    <!-- End Input -->
                  </div>
                  <div class="row">
                    <!-- Input -->
                    <div class="col-sm-6 mb-2">
                      <div class="js-form-message">
                        <label id="cityLabel" class="form-label">
                          City
                          <span class="text-danger">*</span>
                        </label>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name="city"
                            v-model="user.city"
                            placeholder="Enter your city"
                            aria-label="Enter your city"
                            required=""
                            aria-describedby="cityLabel"
                            data-msg="Please enter your city."
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- End Input -->
                    <!-- Input -->
                    <div class="col-sm-6 mb-2">
                      <div class="js-form-message">
                        <label id="countryLabel" class="form-label">
                          Country
                          <span class="text-danger">*</span>
                        </label>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name="country"
                            v-model="user.country"
                            placeholder="Enter your country"
                            aria-label="Enter your country"
                            required=""
                            aria-describedby="countryLabel"
                            data-msg="Please enter your country."
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- End Input -->
                  </div>
                  <div class="row">
                    <!-- Input -->
                    <div class="col-sm-6 mb-2">
                      <div class="js-form-message">
                        <label id="organizationLabel" class="form-label">
                          Organization
                          <span class="text-danger">*</span>
                        </label>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name="organization"
                            v-model="user.organization"
                            placeholder="Enter your organization name"
                            aria-label="Enter your organization name"
                            required=""
                            aria-describedby="organizationLabel"
                            data-msg="Please enter your organization name"
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- End Input -->
                    <!-- Input -->
                    <div class="col-sm-6 mb-2">
                      <div class="js-form-message">
                        <label id="websiteLabel" class="form-label">
                          Website
                          <span class="text-danger">*</span>
                        </label>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name="personal website"
                            v-model="personal_website_link"
                            placeholder="Enter your website"
                            aria-label="Enter your website"
                            required=""
                            aria-describedby="websiteLabel"
                            data-msg="Password enter a valid website"
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                          />
                          <small class="form-text text-muted"
                            >Your home page, blog or company site, e.g.
                            http://example.com</small
                          >
                        </div>
                      </div>
                    </div>
                    <!-- End Input -->
                  </div>
                  <div class="row">
                    <!-- Input -->
                    <div class="col-sm-6 mb-2">
                      <div class="js-form-message">
                        <label id="phoneNumberLabel" class="form-label">
                          Phone number
                          <span class="text-danger">*</span>
                        </label>
                        <div class="form-group">
                          <input
                            class="form-control"
                            type="tel"
                            name="phoneNumber"
                            v-model="user.phone_number"
                            placeholder="Enter your phone number"
                            aria-label="Enter your phone number"
                            required=""
                            aria-describedby="phoneNumberLabel"
                            data-msg="Please enter a valid phone number"
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- End Input -->
                    <!-- Input -->
                    <div class="col-sm-6 mb-2">
                      <div class="js-form-message">
                        <label class="form-label">
                          Preferred language
                          <span class="text-danger">*</span>
                        </label>
                        <div class="form-group">
                          <select
                            class="custom-select"
                            v-model="user.preferred_language"
                          >
                            <option value="">Select language</option>
                            <option value="languageSelect1" selected=""
                              >English</option
                            >
                            <option value="languageSelect2">Français</option>
                            <option value="languageSelect3">Deutsch</option>
                            <option value="languageSelect4">Português</option>
                          </select>
                        </div>
                        <div class="mb-3 text-right">
                          <a
                            class="font-weight-bold btn btn-primary rounded p-3"
                            href="#"
                            v-on:click="basicInfoApiPatch()"
                          >
                            &nbsp;&nbsp;&nbsp;&nbsp; Save Changes
                            &nbsp;&nbsp;&nbsp;&nbsp;
                          </a>
                        </div>
                      </div>
                    </div>
                    <!-- End Input -->
                  </div>
                </form>
              </div>
            </div>
            <div class="border rounded bg-white mb-3">
              <div class="box-title border-bottom p-3">
                <h6 class="m-0">Experience</h6>
                <p class="mb-0 mt-0 small">
                  THIS SECTION IS A PLACEHOLDER Tell about your work, job, and
                  other experiences. THIS SECTION IS A PLACEHOLDER
                </p>
              </div>
              <div class="box-body px-3 pt-3 pb-0">
                <div class="row">
                  <div class="col-sm-6 mb-4">
                    <label id="FROM" class="form-label">FROM</label>
                    <!-- Input -->
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="From"
                        aria-label="FROM"
                        aria-describedby="FROM"
                      />
                    </div>
                    <!-- End Input -->
                  </div>
                  <div class="col-sm-6 mb-4">
                    <label id="TO" class="form-label">TO</label>
                    <!-- Input -->
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="TO"
                        aria-label="TO"
                        aria-describedby="TO"
                      />
                    </div>
                    <!-- End Input -->
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6 mb-4">
                    <label id="companyLabel" class="form-label">Company</label>
                    <!-- Input -->
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your company title"
                        aria-label="Enter your company title"
                        aria-describedby="companyLabel"
                      />
                    </div>
                    <!-- End Input -->
                  </div>
                  <div class="col-sm-6 mb-4">
                    <label id="positionLabel" class="form-label"
                      >Position</label
                    >
                    <!-- Input -->
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your position"
                        aria-label="Enter your position"
                        aria-describedby="positionLabel"
                      />
                    </div>
                    <!-- End Input -->
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: {},
      personal_website_link: null,
      twitter_link: null,
      instagram_link: null,
      facebook_link: null,
      linkedin_link: null,
      github_link: null,
      date_of_birth_month: null,
      date_of_birth_day: null,
      date_of_birth_year: null,
    };
  },
  created: function() {
    this.apiUserCollect();
  },
  methods: {
    apiUserCollect: function() {
      axios.get(`/api/users/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.user = response.data;
        this.personal_website_link = response.data.links.personal_website_link;
        this.twitter_link = response.data.links.twitter_link;
        this.instagram_link = response.data.links.instagram_link;
        this.facebook_link = response.data.links.facebook_link;
        this.linkedin_link = response.data.links.linkedin_link;
        this.github_link = response.data.links.github_link;
        this.date_of_birth_year = response.data.date_of_birth.slice(0, 4);
        this.date_of_birth_month = response.data.date_of_birth.slice(5, 7);
        this.date_of_birth_day = response.data.date_of_birth.slice(8, 10);
      });
    },
    socialMediaApiPatch: function() {
      var params = {
        instagram_link: this.instagram_link,
        twitter_link: this.twitter_link,
        facebook_link: this.facebook_link,
        linkedin_link: this.linkedin_link,
        github_link: this.github_link,
      };
      axios
        .patch(`/api/users/${this.$route.params.id}/`, params)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    userSecondaryInfoApiPatch: function() {
      var params = {
        bio: this.user.bio,
      };
      axios
        .patch(`/api/users/${this.$route.params.id}/`, params)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    basicInfoApiPatch: function() {
      var params = {
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        city: this.user.city,
        country: this.user.country,
        organization: this.user.organization,
        preferred_language: this.user.preferred_language,
        phone_number: this.user.phone_number,
        personal_website_link: this.personal_website_link,
        gender: this.user.gender,
        image_url: this.user.image_url
      };
      if (
        this.date_of_birth_year &&
        this.date_of_birth_month &&
        this.date_of_birth_day
      ) {
        params.date_of_birth = `${this.date_of_birth_year}-${this.date_of_birth_month}-${this.date_of_birth_day}`;
      }
      axios
        .patch(`/api/users/${this.$route.params.id}/`, params)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<style></style>
