/*
 * Copyright (C) 2016 Denis
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package BdTTB;

import java.util.ArrayList;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author Denis
 */
public class DBListaTest {
    
    public DBListaTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
    }
    
    @After
    public void tearDown() {
    }

    /**
     * Test of insertList method, of class DBLista.
     */
    @Test
    public void testInsertList() {
        System.out.println("insertList");
        String nameList = "";
        DBLista instance = new DBLista();
        String expResult = "";
        String result = instance.insertList(nameList);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of updateList method, of class DBLista.
     */
    @Test
    public void testUpdateList() {
        System.out.println("updateList");
        int idLista = 0;
        String nombre = "";
        DBLista instance = new DBLista();
        String expResult = "";
        String result = instance.updateList(idLista, nombre);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of deleteList method, of class DBLista.
     */
    @Test
    public void testDeleteList() {
        System.out.println("deleteList");
        int idList = 1;
        DBLista instance = new DBLista();
        String expResult = "";
        String result = instance.deleteList(idList);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of get method, of class DBLista.
     */
    @Test
    public void testGet() {
        System.out.println("get");
        DBLista instance = new DBLista();
        ArrayList<Lista> expResult = null;
        ArrayList<Lista> result = instance.get();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }
    
}
