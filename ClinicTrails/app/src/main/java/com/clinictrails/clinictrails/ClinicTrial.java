package com.clinictrails.clinictrails;

import java.util.List;

/**
 * Created by stephen on 2016-09-17.
 */
public class ClinicTrial {

    private String title;
    private String age;
    private String description;
    private String phase;
    private List<Site> sites;
    private String nctId;

    ClinicTrial(String title, String age) {
        this.title = title;
        this.age = age;
    }

    ClinicTrial(String title, String age, String description, String phase, List<Site> sites, String nctId) {
        this.title = title;
        this.age = age;
        this.description = description;
        this.phase = phase;
        this.sites = sites;
        this.nctId = nctId;
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

    public String getPhase() {
        return phase;
    }

    public List<Site> getSites() {
        return sites;
    }

    public String getNctId() {
        return nctId;
    }


}
