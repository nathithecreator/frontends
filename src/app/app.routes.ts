import { Routes } from '@angular/router';
import { AboutUsComponent } from './Components/LandLord/about-us/about-us.component';
import { AddPropertyComponent } from './Components/LandLord/add-property/add-property.component';
import { ContactUsComponent } from './Components/LandLord/contact-us/contact-us.component';
import { DashboardLandlordComponent } from './Components/LandLord/dashboard-landlord/dashboard-landlord.component';
import { EditPropertyComponent } from './Components/LandLord/edit-property/edit-property.component';
import { FaqComponent } from './Components/LandLord/faq/faq.component';
import { LandloadLandingPageComponent } from './Components/LandLord/landload-landing-page/landload-landing-page.component';
import { LandlordPropertiesComponent } from './Components/LandLord/landlord-properties/landlord-properties.component';
import { LandlordPropertyDetailsComponent } from './Components/LandLord/landlord-property-details/landlord-property-details.component';
import { LoginComponent } from './Components/LandLord/login/login.component';
import { MaintenanceDetailsComponent } from './Components/LandLord/maintenance-details/maintenance-details.component';
import { MaintenanceComponent } from './Components/LandLord/maintenance/maintenance.component';
import { MessageComponent } from './Components/LandLord/message/message.component';
import { NotificationsComponent } from './Components/LandLord/notifications/notifications.component';
import { ProfileEditComponent } from './Components/LandLord/profile-edit/profile-edit.component';
import { ProfileComponent } from './Components/LandLord/profile/profile.component';
import { RegisterComponent } from './Components/LandLord/register/register.component';
import { StudentApplicationDetailsComponent } from './Components/LandLord/student-application-details/student-application-details.component';
import { StudentApplicationsTableComponent } from './Components/LandLord/student-applications-table/student-applications-table.component';
import { TenantDetailsComponent } from './Components/LandLord/tenant-details/tenant-details.component';
import { TenantsTableComponent } from './Components/LandLord/tenants-table/tenants-table.component';

export const routes: Routes = [
        { path: '', redirectTo: 'LandingPage', pathMatch: 'full' },
        { path: 'LandingPage', component: LandloadLandingPageComponent },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'dashboardll', component: DashboardLandlordComponent },
         { path: 'propertiesll', component: LandlordPropertiesComponent },
          { path: 'propertydetailsll', component: LandlordPropertyDetailsComponent },
          { path: 'studentapplicationsll', component: StudentApplicationsTableComponent },
          { path: 'addpropertyll', component: AddPropertyComponent },
          { path: 'editproperty', component: EditPropertyComponent },
          { path: 'application', component: StudentApplicationDetailsComponent },
          { path: 'maintenancetable', component: MaintenanceComponent },
          { path: 'maintenance', component: MaintenanceDetailsComponent },
          { path: 'tenants', component: TenantsTableComponent },
          { path: 'tenant', component: TenantDetailsComponent },
          { path: 'profile', component: ProfileComponent },
          { path: 'profileedit', component: ProfileEditComponent },
          { path: 'message', component: MessageComponent },
          { path: 'notifications', component: NotificationsComponent },
          { path: 'aboutus', component: AboutUsComponent },
          { path: 'contactus', component: ContactUsComponent },
          { path: 'faq', component: FaqComponent }


];
