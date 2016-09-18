package com.clinictrails.clinictrails;

import java.util.List;

/**
 * Created by stephen on 2016-09-17.
 */
public class ClinicTrial {

    private String title;
    private String age;
    private String description;
    private String eligibility;
    private String objOutline;
    private String phase;
    private List<Site> sites;

    ClinicTrial(String title, String age) {
        this.title = title;
        this.age = age;
    }

    ClinicTrial(String title, String age, String description, String eligibility, String objOutline, String phase, List<Site> sites) {
        this.title = title;
        this.age = age;
        this.description = description;
        this.eligibility = eligibility;
        this.objOutline = objOutline;
        this.phase = phase;
        this.sites = sites;
    }

    public String getTitle() {
        return title;
    }

    public String getAge() {
        return age;
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


}
