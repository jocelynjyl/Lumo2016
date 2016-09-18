package com.clinictrails.clinictrails;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ListView;

import java.util.ArrayList;

public class ClinicListActivity extends AppCompatActivity {

    private ListView cliniclv;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_clinic_list);

        // dummy arraylist
        ArrayList<ClinicTrial> dummy = new ArrayList<ClinicTrial>();
        dummy.add(new ClinicTrial("Title", "18+", "ho"));
        // instantiate view and attach the adapter
        ClinicListAdapter adapter = new ClinicListAdapter(this, dummy);
        cliniclv = (ListView) findViewById(R.id.trialsList);
        cliniclv.setAdapter(adapter);
    }
}
