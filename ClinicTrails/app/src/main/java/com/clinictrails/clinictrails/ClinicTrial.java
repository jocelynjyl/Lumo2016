package com.clinictrails.clinictrails;

/**
 * Created by stephen on 2016-09-17.
 */
public class ClinicTrial {

    private String title;
    private String age;
    private String location;
    private String description;
    private String eligibility;
    private String objOutline;
    private String phase;
    private String organization;

    ClinicTrial(String title, String age, String location) {
        this.title = title;
        this.age = age;
        this.location = location;
    }

    ClinicTrial(String title, String age, String location, String description, String eligibility, String objOutline, String phase, String organization) {
        this.title = title;
        this.age = age;
        this.location = location;
        this.description = description;
        this.eligibility = eligibility;
        this.objOutline = objOutline;
        this.phase = phase;
        this.organization = organization;
    }

    public String getTitle() {
        return title;
    }

    public String getAge() {
        return age;
    }

    public String getLocation() {
        return location;
    }

    public String getDescription() {
        return description;
    }

    public String getEligibility() {
        return eligibility;
    }

    public String getObjOutline() {
        return objOutline;
    }

    public String getPhase() {
        return phase;
    }

    public String getOrganization() {
        return organization;
    }

}
