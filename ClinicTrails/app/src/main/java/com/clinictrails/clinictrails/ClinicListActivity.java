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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class ClinicListActivity extends AppCompatActivity implements SearchView.OnQueryTextListener {

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
        ArrayList<ClinicTrial> dummy = new ArrayList<ClinicTrial>();
        dummy.add(new ClinicTrial("Title", "18+", "ho"));
        dummy.add(new ClinicTrial("aksjdsakjdsak", "19+", "Vancouver"));
        dummy.add(new ClinicTrial("laksdklsa", "19+", "Vancouver"));
        dummy.add(new ClinicTrial("aksjdsakjdsak", "19+", "Vancouver"));
        dummy.add(new ClinicTrial("aksjdsakjdsak", "19+", "Vancouver"));
        // instantiate view and attach the adapter
        ClinicListAdapter adapter = new ClinicListAdapter(this, dummy);
        cliniclv = (ListView) findViewById(R.id.trialsList);
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

    // wait for Jeong to fix since there is no menu_search
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.menu_search, menu);

        MenuItem searchItem = menu.findItem(R.id.search);
        SearchView searchView = (SearchView) MenuItemCompat.getActionView(searchItem);
        searchView.setOnQueryTextListener(this);

        return true;
    }

    @Override
    public boolean onQueryTextSubmit(String query) {
        // User pressed the search button
        return false;
    }

    @Override
    public boolean onQueryTextChange(String newText) {
        // User changed the text
        return false;
    }
}
