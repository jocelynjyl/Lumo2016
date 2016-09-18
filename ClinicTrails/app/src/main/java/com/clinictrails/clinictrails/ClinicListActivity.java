package com.clinictrails.clinictrails;

import android.support.v4.view.MenuItemCompat;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ExpandableListView;
import android.widget.ListView;
import android.widget.SearchView;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class ClinicListActivity extends AppCompatActivity implements SearchView.OnQueryTextListener {

    private ArrayList<ClinicTrial> clinicTrialList;
    private ArrayList<ClinicTrial> queryResultList;

    private ListView cliniclv;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_clinic_list);

        ActionBar actionBar = getSupportActionBar();
        actionBar.setLogo(R.mipmap.ic_clinic);
        actionBar.setDisplayUseLogoEnabled(true);
        actionBar.setDisplayShowHomeEnabled(true);

        // dummy arraylist to remove afterwards
        clinicTrialList = new ArrayList<ClinicTrial>();
        clinicTrialList.add(new ClinicTrial("Hormone Therapy with or without Everolimus", "18+", "Burnaby"));
        clinicTrialList.add(new ClinicTrial("Tamoxifen Citrate, Letrozole, Anastrozole, or Exemestane", "19+", "Vancouver"));
        clinicTrialList.add(new ClinicTrial("Erlotinib Hydrochloride in Treating Patients", "19+", "Vancouver"));
        clinicTrialList.add(new ClinicTrial("Crizotinib in Treating Patients", "19+", "Vancouver"));
        clinicTrialList.add(new ClinicTrial("Doxorubicin Hydrochloride and Cyclophosphamide", "19+", "Vancouver"));

        queryResultList = new ArrayList<ClinicTrial>(clinicTrialList);

        cliniclv = (ListView) findViewById(R.id.trialsList);

        populateListView();
    }

    // wait for Jeong to fix since there is no menu_search
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.menu_search, menu);

        MenuItem searchItem = menu.findItem(R.id.search);
        SearchView searchView = (SearchView) MenuItemCompat.getActionView(searchItem);
        searchView.setOnQueryTextListener(this);

        return true;
    }


    public void populateListView() {
        // remove adapter bound to ListView object
        cliniclv.setAdapter(null);

        // instantiate view and attach the adapter
        ClinicListAdapter adapter = new ClinicListAdapter(this, queryResultList);
        cliniclv.setAdapter(adapter);
        cliniclv.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapter, View view, int position, long arg) {
                // start new intent for next activity -- to display full page
                // Intent appInfo = new Intent(YourActivity.this, newActivity.class);
                // startActivity(appInfo);
            }
        });
    }
	
	private JSONObject retrieveResult (String query) {
		 final String url = "https://clinicaltrialapps.herokuapp.com/search";
        try {
            final JSONObject jsonReq = new JSONObject("{\"brief_title\":query}");
        } catch (JSONException e) {
            e.printStackTrace();
        }

        JsonObjectRequest jsObj = new JsonObjectRequest(Request.Method.POST, url, null, new Response.Listener<JSONObject>() {
            @Override
            public void onResponse(JSONObject response) {
                
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {

            }
        });
		
	}

    @Override
    public boolean onQueryTextSubmit(String query) {
        // User pressed the search button

        retrieveResult(query);
        populateListView();

        return true;
    }

    @Override
    public boolean onQueryTextChange(String newText) {
        // User changed the text
        return false;
    }

}